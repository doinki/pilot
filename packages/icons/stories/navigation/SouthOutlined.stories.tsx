import type { Meta, StoryObj } from '@storybook/react';

import SouthOutlined from '../../lib/navigation/SouthOutlined';

const meta: Meta<typeof SouthOutlined> = {
  component: SouthOutlined,
  tags: ['autodocs'],
  title: 'navigation/SouthOutlined',
};

export default meta;
type Story = StoryObj<typeof SouthOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
