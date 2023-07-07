import type { Meta, StoryObj } from '@storybook/react';

import RiceBowlOutlined from '../../lib/places/RiceBowlOutlined';

const meta: Meta<typeof RiceBowlOutlined> = {
  component: RiceBowlOutlined,
  tags: ['autodocs'],
  title: 'places/RiceBowlOutlined',
};

export default meta;
type Story = StoryObj<typeof RiceBowlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
