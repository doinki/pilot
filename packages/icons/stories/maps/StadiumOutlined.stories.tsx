import type { Meta, StoryObj } from '@storybook/react';

import StadiumOutlined from '../../lib/maps/StadiumOutlined';

const meta: Meta<typeof StadiumOutlined> = {
  component: StadiumOutlined,
  tags: ['autodocs'],
  title: 'maps/StadiumOutlined',
};

export default meta;
type Story = StoryObj<typeof StadiumOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
