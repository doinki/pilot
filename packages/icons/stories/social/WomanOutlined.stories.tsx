import type { Meta, StoryObj } from '@storybook/react';

import WomanOutlined from '../../lib/social/WomanOutlined';

const meta: Meta<typeof WomanOutlined> = {
  component: WomanOutlined,
  tags: ['autodocs'],
  title: 'social/WomanOutlined',
};

export default meta;
type Story = StoryObj<typeof WomanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
