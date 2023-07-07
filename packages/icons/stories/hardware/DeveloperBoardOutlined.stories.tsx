import type { Meta, StoryObj } from '@storybook/react';

import DeveloperBoardOutlined from '../../lib/hardware/DeveloperBoardOutlined';

const meta: Meta<typeof DeveloperBoardOutlined> = {
  component: DeveloperBoardOutlined,
  tags: ['autodocs'],
  title: 'hardware/DeveloperBoardOutlined',
};

export default meta;
type Story = StoryObj<typeof DeveloperBoardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
