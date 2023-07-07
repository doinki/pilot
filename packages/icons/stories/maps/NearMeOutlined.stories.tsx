import type { Meta, StoryObj } from '@storybook/react';

import NearMeOutlined from '../../lib/maps/NearMeOutlined';

const meta: Meta<typeof NearMeOutlined> = {
  component: NearMeOutlined,
  tags: ['autodocs'],
  title: 'maps/NearMeOutlined',
};

export default meta;
type Story = StoryObj<typeof NearMeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
