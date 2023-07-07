import type { Meta, StoryObj } from '@storybook/react';

import MmsOutlined from '../../lib/notification/MmsOutlined';

const meta: Meta<typeof MmsOutlined> = {
  component: MmsOutlined,
  tags: ['autodocs'],
  title: 'notification/MmsOutlined',
};

export default meta;
type Story = StoryObj<typeof MmsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
