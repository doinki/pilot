import type { Meta, StoryObj } from '@storybook/react';

import UnpublishedOutlined from '../../lib/action/UnpublishedOutlined';

const meta: Meta<typeof UnpublishedOutlined> = {
  component: UnpublishedOutlined,
  tags: ['autodocs'],
  title: 'action/UnpublishedOutlined',
};

export default meta;
type Story = StoryObj<typeof UnpublishedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
