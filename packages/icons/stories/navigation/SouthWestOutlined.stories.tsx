import type { Meta, StoryObj } from '@storybook/react';

import SouthWestOutlined from '../../lib/navigation/SouthWestOutlined';

const meta: Meta<typeof SouthWestOutlined> = {
  component: SouthWestOutlined,
  tags: ['autodocs'],
  title: 'navigation/SouthWestOutlined',
};

export default meta;
type Story = StoryObj<typeof SouthWestOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
