import type { Meta, StoryObj } from '@storybook/react';

import UnfoldLessOutlined from '../../lib/navigation/UnfoldLessOutlined';

const meta: Meta<typeof UnfoldLessOutlined> = {
  component: UnfoldLessOutlined,
  tags: ['autodocs'],
  title: 'navigation/UnfoldLessOutlined',
};

export default meta;
type Story = StoryObj<typeof UnfoldLessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
