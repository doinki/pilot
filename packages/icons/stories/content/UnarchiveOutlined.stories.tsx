import type { Meta, StoryObj } from '@storybook/react';

import UnarchiveOutlined from '../../lib/content/UnarchiveOutlined';

const meta: Meta<typeof UnarchiveOutlined> = {
  component: UnarchiveOutlined,
  tags: ['autodocs'],
  title: 'content/UnarchiveOutlined',
};

export default meta;
type Story = StoryObj<typeof UnarchiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
