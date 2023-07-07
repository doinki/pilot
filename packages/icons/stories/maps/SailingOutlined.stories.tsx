import type { Meta, StoryObj } from '@storybook/react';

import SailingOutlined from '../../lib/maps/SailingOutlined';

const meta: Meta<typeof SailingOutlined> = {
  component: SailingOutlined,
  tags: ['autodocs'],
  title: 'maps/SailingOutlined',
};

export default meta;
type Story = StoryObj<typeof SailingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
