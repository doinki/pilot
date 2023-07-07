import type { Meta, StoryObj } from '@storybook/react';

import EastOutlined from '../../lib/navigation/EastOutlined';

const meta: Meta<typeof EastOutlined> = {
  component: EastOutlined,
  tags: ['autodocs'],
  title: 'navigation/EastOutlined',
};

export default meta;
type Story = StoryObj<typeof EastOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
