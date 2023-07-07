import type { Meta, StoryObj } from '@storybook/react';

import ChildCareOutlined from '../../lib/places/ChildCareOutlined';

const meta: Meta<typeof ChildCareOutlined> = {
  component: ChildCareOutlined,
  tags: ['autodocs'],
  title: 'places/ChildCareOutlined',
};

export default meta;
type Story = StoryObj<typeof ChildCareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
