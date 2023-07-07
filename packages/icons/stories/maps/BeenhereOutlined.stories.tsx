import type { Meta, StoryObj } from '@storybook/react';

import BeenhereOutlined from '../../lib/maps/BeenhereOutlined';

const meta: Meta<typeof BeenhereOutlined> = {
  component: BeenhereOutlined,
  tags: ['autodocs'],
  title: 'maps/BeenhereOutlined',
};

export default meta;
type Story = StoryObj<typeof BeenhereOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
