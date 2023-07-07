import type { Meta, StoryObj } from '@storybook/react';

import LocalSeeOutlined from '../../lib/maps/LocalSeeOutlined';

const meta: Meta<typeof LocalSeeOutlined> = {
  component: LocalSeeOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalSeeOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalSeeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
