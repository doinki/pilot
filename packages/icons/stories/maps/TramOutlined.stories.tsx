import type { Meta, StoryObj } from '@storybook/react';

import TramOutlined from '../../lib/maps/TramOutlined';

const meta: Meta<typeof TramOutlined> = {
  component: TramOutlined,
  tags: ['autodocs'],
  title: 'maps/TramOutlined',
};

export default meta;
type Story = StoryObj<typeof TramOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
