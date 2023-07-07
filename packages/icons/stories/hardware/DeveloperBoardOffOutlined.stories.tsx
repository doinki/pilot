import type { Meta, StoryObj } from '@storybook/react';

import DeveloperBoardOffOutlined from '../../lib/hardware/DeveloperBoardOffOutlined';

const meta: Meta<typeof DeveloperBoardOffOutlined> = {
  component: DeveloperBoardOffOutlined,
  tags: ['autodocs'],
  title: 'hardware/DeveloperBoardOffOutlined',
};

export default meta;
type Story = StoryObj<typeof DeveloperBoardOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
