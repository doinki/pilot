import type { Meta, StoryObj } from '@storybook/react';

import TwoWheelerOutlined from '../../lib/maps/TwoWheelerOutlined';

const meta: Meta<typeof TwoWheelerOutlined> = {
  component: TwoWheelerOutlined,
  tags: ['autodocs'],
  title: 'maps/TwoWheelerOutlined',
};

export default meta;
type Story = StoryObj<typeof TwoWheelerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
