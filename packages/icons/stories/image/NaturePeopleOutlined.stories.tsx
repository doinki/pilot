import type { Meta, StoryObj } from '@storybook/react';

import NaturePeopleOutlined from '../../lib/image/NaturePeopleOutlined';

const meta: Meta<typeof NaturePeopleOutlined> = {
  component: NaturePeopleOutlined,
  tags: ['autodocs'],
  title: 'image/NaturePeopleOutlined',
};

export default meta;
type Story = StoryObj<typeof NaturePeopleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
