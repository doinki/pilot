import type { Meta, StoryObj } from '@storybook/react';

import SubwayOutlined from '../../lib/maps/SubwayOutlined';

const meta: Meta<typeof SubwayOutlined> = {
  component: SubwayOutlined,
  tags: ['autodocs'],
  title: 'maps/SubwayOutlined',
};

export default meta;
type Story = StoryObj<typeof SubwayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
