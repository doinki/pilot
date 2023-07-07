import type { Meta, StoryObj } from '@storybook/react';

import FortOutlined from '../../lib/maps/FortOutlined';

const meta: Meta<typeof FortOutlined> = {
  component: FortOutlined,
  tags: ['autodocs'],
  title: 'maps/FortOutlined',
};

export default meta;
type Story = StoryObj<typeof FortOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
